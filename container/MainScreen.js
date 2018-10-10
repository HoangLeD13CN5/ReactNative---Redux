import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { changePlatform } from '../actions';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

class AppExtends extends React.Component {
    clickButton(text) {
        this.props.change(text);
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>{'Run in ' + this.props.platform}</Text>
                <View style={styles.contanner_view}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.clickButton('Andorid')}>
                        <Text style={styles.text_button}>Android</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.clickButton('ios')}>
                        <Text style={styles.text_button}>IOS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    contanner_view: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginTop: 10,
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    text_button: {
        fontSize: 15,
        color: '#fff',
    },
});

const mapStateToProps = state => {
    return {
        platform: state.platform
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change: (text) => {
            dispatch(changePlatform(text))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppExtends)
