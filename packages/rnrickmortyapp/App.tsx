import React from 'react';
import 'react-native-gesture-handler';
import {ApolloProvider} from "@apollo/client/react";
import {apollo} from "./client/apollo.ts";
import {RootNavigator} from "./navigation";


const App = () => {
    return (
        <ApolloProvider client={apollo}>
            <RootNavigator />
        </ApolloProvider>
    );
};


export default App;