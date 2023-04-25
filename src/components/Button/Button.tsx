import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
// import styles from '.'
import './Button.js'

interface ButtonProps {
    title: string
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.wrapper]}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
        // <button>
        //     <h5>
        //         {props.label}
        //     </h5>
        // </button>
    ) 
}

// import {StyleSheet} from 'react-native'
// import colors from '../../../assets/colors'
const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loaderSection: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  error: {
    // color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  }
})

export default Button