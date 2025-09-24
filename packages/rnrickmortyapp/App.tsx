import React from 'react';
import 'react-native-gesture-handler';
import {ApolloProvider} from "@apollo/client/react";
import {apollo} from "./client/apollo.ts";
import {RootNavigator} from "./navigation";
import {Provider} from "react-redux";
import {store} from "./store";
import "./i18n.config";


const App = () => {
    return (
        <Provider store={store}>
            <ApolloProvider client={apollo}>
                <RootNavigator />
            </ApolloProvider>
        </Provider>
    );
};


export default App;