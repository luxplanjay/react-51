import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    selectedBreed: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/breeds');
      this.setState({ breeds: response.data });
    } catch (error) {}
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.selectedBreed !== this.state.selectedBreed) {
      this.fetchDog();
    }
  }

  buildOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };

  handleChangeBreed = async option => {
    this.setState({ selectedBreed: option.value });
  };

  fetchDog = async () => {
    try {
      const response = await axios.get('/images/search', {
        params: { breed_id: this.state.selectedBreed },
      });
      this.setState({ dog: response.data[0] });
    } catch (error) {}
  };

  render() {
    const { dog } = this.state;
    const options = this.buildOptions();

    return (
      <>
        <Select options={options} onChange={this.handleChangeBreed} />
        {dog && (
          <div>
            <img src={dog.url} alt={dog.breeds[0].name} width="480" />
            <hr />
            <button onClick={this.fetchDog}>
              Показать другое изображение...
            </button>
          </div>
        )}
      </>
    );
  }
}
