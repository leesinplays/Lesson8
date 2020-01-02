import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';

const datasource = [
  {
    name: 'iPhone XR',
    brand: 'Apple',
    image: require('./src/img/iphonexr.jpg'),
  },
  {
    name: 'Redmi Note 7 and 7 Pro',
    brand: 'Xiaomi',
    image: require('./src/img/redminote7.jpg'),
  },
  {
    name: 'P30 and P30 Pro',
    brand: 'Huawei',
    image: require('./src/img/p30.jpg'),
  },
  {
    name: 'iPhone 7 Plus',
    brand: 'Apple',
    image: require('./src/img/iphone7plus.jpg'),
  },
  {
    name: 'Mate 20 and Mate 20 Pro',
    brand: 'Huawei',
    image: require('./src/img/mate20.png'),
  },
  {
    name: 'Galaxy A10',
    brand: 'Samsung',
    image: require('./src/img/a10.jpg'),
  },
  {
    name: 'Galaxy A50',
    brand: 'Samsung',
    image: require('./src/img/a50.jpg'),
  },
  {
    name: 'iPhone 8',
    brand: 'Apple',
    image: require('./src/img/iphone8.jpg'),
  },
  {
    name: 'Redmi 6A',
    brand: 'Xiaomi',
    image: require('./src/img/redmi6a.jpg'),
  },
  {name: 'A5', brand: 'Oppo', image: require('./src/img/a5.png')},
  {
    name: 'iPhone Xs Max',
    brand: 'Apple',
    image: require('./src/img/iphonexsmax.jpg'),
  },
  {
    name: 'Galaxy A30',
    brand: 'Samsung',
    image: require('./src/img/a30.jpg'),
  },
  {
    name: 'Galaxy S10+',
    brand: 'Samsung',
    image: require('./src/img/s10plus.jpg'),
  },
  {
    name: 'Galaxy S10',
    brand: 'Samsung',
    image: require('./src/img/s10.jpg'),
  },
  {
    name: 'Galaxy S10e',
    brand: 'Samsung',
    image: require('./src/img/s10e.jpg'),
  },
  {
    name: 'Galaxy S10 5G',
    brand: 'Samsung',
    image: require('./src/img/s105g.jpg'),
  },
];

//INSERT _renderItem function CODE HERE
_renderItems = ({item}) => {
  return (
    <View style={styles.mobileItem}>
      <Image source={item.image} style={[styles.image]} />
      <View style={[styles.info, styles.sections1]}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.model}>{item.name}</Text>
      </View>
    </View>
  );
};

const App: () => React$Node = () => {
  return (
    <View>
      <Text style={styles.title}>List of Best-Selling Mobile Phones</Text>
      <View style={[styles.mobileItem]}>
        <FlatList data={datasource} renderItem={this._renderItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#3f51b5',
    fontSize: 20,
    height: 60,
    textAlign: 'center',
    padding: 15,
    color: 'white',
  },
  mobileItem: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#AAAAAA',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    height: 150,
  },
  info: {
    flex: 3,
    padding: 20,
    fontSize: 18,
    marginTop: 30,
  },
  brand: {
    fontSize: 18,
    textAlign: 'right',
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default App;
