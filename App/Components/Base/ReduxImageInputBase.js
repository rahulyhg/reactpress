import React from 'react';
import {
    RkText,
    RkTextInput,
    RkButton
} from 'react-native-ui-kitten';
import {
    View,
    TouchableOpacity
} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome'
export default function ReduxImageInputBase(props) {
    const { input, meta, meta: { valid, error, visited }, label } = props;

    const header = error && !valid && visited ? (
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <RkText style={{ marginRight: 4, }}>{label}</RkText>
            <RkText rkType='error'>{error}</RkText>
        </View>
    ) : <RkText >{label}</RkText>

    return (
        <View>
            {header}
            <View style={{ flexDirection: 'row' }}>
                {/* <RkTextInput
                    {...props}
                    // rkType="topLabel"
                    //  placeholder={label}
                    label={undefined}
                    onChangeText={input.onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    style={{ flex: 0.8 }}
                /> */}
                {/* <TouchableOpacity style={{ flex: 1, height:40, alignItems: 'center', justifyContent: 'center',
                backgroundColor:
            }}>
                    <FIcon name={'image'} size={35} />
                </TouchableOpacity> */}
                <RkButton style={{flex:1, marginTop: 8,}} rkType={'info large'}> Insert Image </RkButton>
            </View>
        </View>
    );
}

