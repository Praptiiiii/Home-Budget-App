import React, { useState } from 'react';
import { View, TextInput, TouchableHighlight, Text, StyleSheet, Alert } from 'react-native';
import { productAdd } from './redux/action';
import { useDispatch } from 'react-redux';
import { ImageBackground } from 'react-native';

// Import your background image
import background from '../images/background.jpg';



export const BudgetEntryScreen = (props) => {
    const [itemName, setItemName] = useState('');
    const [plannedAmount, setPlannedAmount] = useState('');
    const [actualAmount, setActualAmount] = useState('');

    const [itemNameError, setItemNameError] = useState('');
    const [plannedAmountError, setPlannedAmountError] = useState('');
    const [actualAmountError, setActualAmountError] = useState('');

    const dispatch = useDispatch();
    const handleSaveItem = () => {

        setItemNameError('');
        setPlannedAmountError('');
        setActualAmountError('');


        const plannedAmountNumber = parseFloat(plannedAmount);
        const actualAmountNumber = parseFloat(actualAmount);


        if (!itemName || !plannedAmount || !actualAmount) {
            Alert.alert('Validation Error', 'All fields are mandatory.');


            if (!itemName) {
                setItemNameError('This field is mandatory');
            }
            if (!plannedAmount) {
                setPlannedAmountError('This field is mandatory');
            }
            if (!actualAmount) {
                setActualAmountError('This field is mandatory');
            }
        } else if (plannedAmountNumber < 0 || actualAmountNumber < 0) {
            Alert.alert('Validation Error', 'Amounts cannot be negative.');


            if (plannedAmountNumber < 0) {
                setPlannedAmountError('Planned amount cannot be negative');
            }
            if (actualAmountNumber < 0) {
                setActualAmountError('Actual amount cannot be negative');
            }
        } else if (plannedAmountNumber < actualAmountNumber) {
            Alert.alert('Validation Error', 'Planned amount should be greater than or equal to actual amount.');


            setPlannedAmountError('Planned amount should be greater than or equal to actual amount');
        } else {
            const newItem = {
                itemName,
                plannedAmount: plannedAmountNumber,
                actualAmount: actualAmountNumber,
            };

            dispatch(productAdd(itemName, plannedAmount, actualAmount));
            setItemName('');
            setPlannedAmount('');
            setActualAmount('');
        }
    };

    return (
        <ImageBackground source={background} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.container}>


                <TextInput
                    placeholder="Name of the item"
                    value={itemName}
                    onChangeText={(text) => {
                        setItemName(text);
                        setItemNameError(''); // Clear the error message when the user starts filling the field
                    }}
                    style={[styles.textInput, itemNameError && styles.errorBorder]}
                    
                />
                {!itemNameError ? null : <Text style={styles.errorText}>{itemNameError}</Text>}

                <TextInput
                    placeholder="Planned amount"
                    value={plannedAmount}
                    onChangeText={(text) => {
                        setPlannedAmount(text);
                        setPlannedAmountError(''); // Clear the error message when the user starts filling the field
                    }}
                    keyboardType="numeric"
                    style={[styles.textInput, plannedAmountError && styles.errorBorder]}
                />
                {!plannedAmountError ? null : <Text style={styles.errorText}>{plannedAmountError}</Text>}

                <TextInput
                    placeholder="Actual amount"
                    value={actualAmount}
                    onChangeText={(text) => {
                        setActualAmount(text);
                        setActualAmountError(''); // Clear the error message when the user starts filling the field
                    }}
                    keyboardType="numeric"
                    style={[styles.textInput, actualAmountError && styles.errorBorder]}
                />
                {!actualAmountError ? null : <Text style={styles.errorText}>{actualAmountError}</Text>}

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.saveButton}
                        underlayColor="#003366"
                        onPress={() =>
                            handleSaveItem()}
                    >
                        <Text style={styles.buttonText}>Save Items</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.showItemsButton}
                        underlayColor="#003366"
                    >
                        <Text style={styles.buttonText} onPress={() => props.navigation.navigate('List Screen',
                            {
                                itemName,
                                plannedAmount,
                                actualAmount
                            }
                        )}>Show Items</Text>

                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    textInput: {
        fontSize: 18,
        color: 'black',
fontWeight:400,
        borderWidth: 3,
        borderBottomColor: 'darkgrey',
        borderColor: 'lightgrey',
        marginBottom: 10,
        padding: 20,
        width: 200,
        

    },
    saveButton: {
        backgroundColor: '#003366',
        padding: 15,
        margin: 10,
        borderRadius: 50,
        alignSelf: 'flex-end',
        color: 'black'
    },
    showItemsButton: {
        backgroundColor: '#003366',
        padding: 15,
        margin: 10,
        borderRadius: 50,
        alignSelf: 'flex-start',
        color: 'black'

    },
    errorText: {
        color: 'red',
    },
    errorBorder: {
        borderColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default BudgetEntryScreen;
