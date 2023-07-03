import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

interface CardProps {
  type: string;
  name: string;
  address: string;
  rating: string;
  averageBill: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  type,
  name,
  address,
  rating,
  averageBill,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.bill}>Average bill: {averageBill}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    flex: 1,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    flex: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  name: {
    fontSize: 25,
    color: 'black',
  },
  address: {
    color: 'black',
  },
  bill: {
    color: 'black',
  },
  ratingContainer: {
    flex: 1,
  },
  rating: {
    fontSize: 22,
    color: 'black',
    fontWeight: '800',
  },
  image: {
    width: 80,
    height: 100,
  },
});
