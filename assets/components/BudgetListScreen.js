import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { ImageBackground } from 'react-native';


import background from '../images/background.jpg';

export const BudgetListScreen = () => {
    const budgetItems = useSelector((state) => state.budget.budgetItems); // Access the budgetItems from the Redux store

    return (
        <ImageBackground source={background} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>Budget Entries Listing</Text>
                <View style={styles.gridContainer}>
                    {budgetItems.map((item, index) => (
                        <View style={styles.entryContainer} key={index}>
                            <Text style={styles.entryText}>Name: {item.itemName}</Text>
                            <Text style={styles.entryText}>Planned Amount: {item.plannedAmount}</Text>
                            <Text style={styles.entryText}>Actual Amount: {item.actualAmount}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    entryContainer: {
        width: 160, 
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    entryText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default BudgetListScreen;
