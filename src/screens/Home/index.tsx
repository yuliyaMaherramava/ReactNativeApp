import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Card from '../../components/Card';

const data = [
  {
    type: 'Индийская',
    name: 'IndiaGate',
    address: 'al. Jerozolimskie 89, 02-001 Warszawa',
    rating: '5.6',
    averageBill: '90',
    imageUrl:
      'https://img.restoclub.ru/uploads/place/4/6/b/c/46bc610574e904ea0ee5aae3d3749a07_w470.jpg',
  },
  {
    type: 'Польская',
    name: 'Zapiecek',
    address: 'Krakowskie Przedmieście 55, 00-071 Warszawa',
    rating: '8.6',
    averageBill: '50',
    imageUrl:
      'https://img.restoclub.ru/uploads/place/4/6/b/c/46bc610574e904ea0ee5aae3d3749a07_w470.jpg',
  },
  {
    type: 'Итальянская',
    name: 'Diverso Ristorante Italiano',
    address: 'Górnośląska 24, 00-484 Warszawa',
    rating: '9.2',
    averageBill: '22',
    imageUrl:
      'https://img.restoclub.ru/uploads/place/4/6/b/c/46bc610574e904ea0ee5aae3d3749a07_w470.jpg',
  },
  {
    type: 'Тайская',
    name: 'Miss Thai',
    address: 'al. Jerozolimskie 89, 02-001 Warszawa',
    rating: '7.4',
    averageBill: '70',
    imageUrl:
      'https://img.restoclub.ru/uploads/place/4/6/b/c/46bc610574e904ea0ee5aae3d3749a07_w470.jpg',
  },
];

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            type={item.type}
            name={item.name}
            address={item.address}
            rating={item.rating}
            averageBill={item.averageBill}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 5,
  },
});
