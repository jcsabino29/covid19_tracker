import React from 'react';

import { Cards, Charts, CountryPicker, Header } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Header/>
                <Cards data={data} />
                <CountryPicker/>
                <Charts/>                
            </div>
        );
    }
}

export default App;