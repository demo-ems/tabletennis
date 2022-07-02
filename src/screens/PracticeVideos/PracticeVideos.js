import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const dataList = [
  {key: 'PV-1'},
  {key: 'PV-2'},
  {key: 'PV-3'},
  {key: 'PV-4'},
  {key: 'PV-5'},
  {key: 'PV-6'},
  {key: 'PV-7'},
];
const WIDTH = Dimensions.get('window').width;
const numColumns = 2;
class PracticeVideos extends Component {
  formateData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRows = dataList.length - totalRows * numColumns;

    while (totalLastRows !== 0 && totalLastRows !== numColumns) {
      dataList.push({key: 'blank', empty: true});
      totalLastRows++;
    }
    return dataList;
  };

  _renderItem = ({item, index}) => {
    if (item.empty) {
      return (
        <View style={[styles.item, styles.itemInvisible]}>
          <></>
        </View>
      );
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    let {container} = styles;
    return (
      <TouchableOpacity
        style={container}
        onPress={(item, index) => {
          console.warn(`${item} on ${index}`);
        }}>
        <FlatList
          data={this.formateData(dataList, numColumns)}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => {
            index.toString();
            // item.toString();
          }}
          numColumns={numColumns}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    //  alignItems: 'center',
    //  justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
    flex: 1,
    margin: 1,
    height: WIDTH / numColumns,
  },
  itemText: {
    fontSize: 30,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});

export default PracticeVideos;
