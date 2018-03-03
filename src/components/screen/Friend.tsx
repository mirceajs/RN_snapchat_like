import UserListItem from '@shared/UserListItem';
import EmptyListItem from '@shared/EmptyListItem';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';

import { ratio, colors, screenWidth } from '@utils/Styles';
import { getString } from '@STRINGS';
import appStore from '@stores/appStore';

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
      friends: [
        {
          id: 1,
          img: null,
          displayName: '고현정잉',
          statusMsg: '나는 지금 아무 생각이',
        },
        {
          id: 2,
          img: null,
          displayName: '고무고무열매',
          statusMsg: '',
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
              marginTop: 16 * ratio,
              alignItems: this.state.friends.length === 0 ? 'center' : 'flex-start',
              justifyContent: this.state.friends.length === 0 ? 'center' : 'flex-start',
            },
          ]}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.friends}
          renderItem={this.renderItem}
          ListEmptyComponent={<EmptyListItem>{getString('NO_CONTENT')}</EmptyListItem>}
        />
      </View>
    );
  }

  private renderItem = ({ item }) => {
    return (
      <UserListItem
        item={item}
        onPress={() => this.onItemClick(item.id)}
      />
    );
  }

  private onItemClick = async (itemId) => {
    console.log(`onItemClick: ${itemId}`);
  }
}

export default Screen;