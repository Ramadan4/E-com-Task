import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Category} from '../../Component/Category';
import {ProductList} from '../../Component/productList';
import {data} from '../../helperFunctions/data';

function renderCategory({item}) {
  return <Category data={item} />;
}
function renderProduct({item}) {
  return <ProductList data={item} />;
}

function renderCategoryList(data) {
  return <FlatList data={data} renderItem={renderCategory} horizontal={true} />;
}
const renderProductList = data => {
  return <FlatList data={data} renderItem={renderProduct} numColumns={2} />;
}
export function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoryList(data)}

      <Text style={styles.headerText}>Products</Text>
      {renderProductList(data)}
    </ScrollView>
  );
}
 