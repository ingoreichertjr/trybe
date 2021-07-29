import React, { Component } from 'react';

class Doguinho extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: '',
      breed: '',
      namedDogs: [],
      loading: true,
    };

    this.GetDog = this.GetDog.bind(this);
    this.SaveName = this.SaveName.bind(this);
    this.GetSavedDog = this.GetSavedDog.bind(this);
  }

  componentDidMount() {
    if (localStorage.savedDogs) {
      const storage = JSON.parse(localStorage.savedDogs);
      this.GetSavedDog(storage[storage.length - 1].dog);
    } else {
      this.GetDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dog.includes('terrier')) {
      this.GetDog();
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    const { namedDogs } = this.state;

    if (namedDogs.length !== 0) {
      localStorage.savedDogs = JSON.stringify(namedDogs);
    }

    // if (dog !== '') {
    //   alert(dog.split('/')[4]);
    // }
  }

  async GetDog() {
    this.setState({ dog: '', breed: '', loading: true });
    const data = await (await fetch('https://dog.ceo/api/breeds/image/random')).json();
    const breed = data.message.split('/')[4];
    this.setState({ dog: data.message, breed, loading: false });
  }

  GetSavedDog(dog) {
    const breed = dog.split('/')[4];
    this.setState({
      dog,
      breed,
      loading: false,
    });
  }

  SaveName() {
    const { dog, namedDogs } = this.state;
    const name = document.getElementById('name-input').value;

    const namedDog = { dog, name };

    this.setState({ namedDogs: [...namedDogs, namedDog] });

    document.getElementById('name-input').value = '';
    this.GetDog();
  }

  RenderImg(dog) {
    return <img src={ dog } alt="dog" />;
  }

  render() {
    const { dog, breed, loading } = this.state;
    const Img = this.RenderImg(dog);

    return (
      <>
        <span>{ breed }</span>
        <div>
          {loading ? <span>Loading...</span> : Img }
        </div>
        <input id="name-input" type="text" placeholder="Give it a name!" />
        <button type="button" onClick={ this.SaveName }>Save</button>
        <div>
          <button type="button" onClick={ this.GetDog }>New Dog</button>
        </div>
      </>
    );
  }
}

export default Doguinho;
