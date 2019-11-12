import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from "react-native";

class FlatListDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        );
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" color="gray"/>
            </View>
        );
    };

    //Item on list
    renderItem = ({ item }) => {
        return (
            <View style={{flexDirection: 'row', marginLeft: 16, marginRight: 16, padding: 8 }}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    source={{ uri: item.picture.thumbnail }} />
                <View style={{ flex:1, flexDirection: 'column', marginLeft: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name.first} {item.name.last}</Text>
                    <Text style={{ fontSize: 12, color: 'gray', marginTop: 4 }}>{item.email}</Text>
                </View>
                <Image style={{width:20, height:20, marginRight: 16, alignSelf:'center'}} source={require('./images/next.png')}/>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={10}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    separator:{
        height: 1,
        width: "90%",
        backgroundColor: "#CED0CE",
        marginLeft: "5%"
    }
});

export default FlatListDemo;
