import React from "react";
class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      allMemeImgs: "",
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((respnse) => respnse.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form className="name-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
