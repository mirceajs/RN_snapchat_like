import EmptyListItem from '@shared/EmptyListItem';
import ChatroomListItem from '@shared/ChatroomListItem';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';

import { ratio, colors } from '@utils/Styles';
import { getString } from '@STRINGS';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class Screen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          img: null,
          displayName: '두부랩',
          msg: '같이 저녁 먹을까??',
          count: 6,
          date: new Date(),
        },
        {
          id: 2,
          img: null,
          displayName: 'Byun8585',
          msg: '안녕하세요. 스쿠버 동아리 15학번....',
          count: 0,
          date: new Date(),
        },
    ],
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={[
            {
              flex: 1,
              alignSelf: 'stretch',
              marginTop: 16 * ratio,
              alignItems: this.state.messages.length === 0 ? 'center' : 'flex-start',
              justifyContent: this.state.messages.length === 0 ? 'center' : 'flex-start',
            },
          ]}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.messages}
          renderItem={this.renderItem}
          ListEmptyComponent={<EmptyListItem>{getString('NO_CONTENT')}</EmptyListItem>}
        />
      </View>
    );
  }

  private renderItem = ({ item }) => {
    return (
      <ChatroomListItem
        item={item}
        onPress={() => this.onItemClick(item.id)}
      />
    );
  }

  private onItemClick = (itemId) => {
    console.log(`onItemClick: ${itemId}`);
  }
}

export default Screen;