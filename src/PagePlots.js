
import React, { Component } from 'react';
import { Grid, Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

var sprintf = require("sprintf-js").sprintf;

class PagePlots extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qString: props.qString
        };
        
        // hack to make 'this; work correctly...
        this.handleGenerate = this.handleGenerate.bind(this);
        this.handleRegenerate = this.handleRegenerate.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChangeProtagonist = this.handleChangeProtagonist.bind(this);
        this.handleChangePartner = this.handleChangePartner.bind(this);
        this.handleChangePassion = this.handleChangePassion.bind(this);
        this.handleChangePeril = this.handleChangePeril.bind(this);
        this.handleChangePower = this.handleChangePower.bind(this);
        this.handleChangePlace = this.handleChangePlace.bind(this);
    }

    componentWillMount(){
      this.handleReset();
    }

    componentDidMount(){
      
    }
    
    componentWillUnmount(){

    }

  handleReset(e){
    this.setState(
      {
            protagonist: "Theresa May",
            partner: "Boris Johnson",
            peril: "Brexit",
            place: "The EU Parliament",
            passion: "a love of being overly smug",
            power: "President Trump",
            plot: 0,
            plotTitle: "",
            narative: "",
            plots: [
                      { title: "Overcoming the Monster (7)", 
                        format: "%(protagonist)s sets out to defeat %(peril)s which threatens %(protagonist)s and/or %(protagonist)s's homeland."},
                      { title: "Rags to Riches (7)", 
                        format: "Poor %(protagonist)s acquires things such as %(passion)s and %(partner)s, before losing it all and gaining it back upon growing as a person."},
                      { title: "The Quest (7)", 
                        format: "%(protagonist)s and some companions (including %(partner)s) set out to acquire an important object or to get to %(place)s, facing many obstacles and temptations along the way."},
                      { title: "Voyage and Return (7)", 
                        format: "%(protagonist)s goes to a strange land (%(place)s) and, after overcoming %(peril)s, returns with experience."},
                      { title: "The Supplicant (36)", 
                        format: "%(protagonist)s appeals to %(power)s for deliverance from %(peril)s - but the decision could go either way."},
                      { title: "An enemy loved (36)", 
                        format: "Comrades %(protagonist)s and %(partner)s have opposing views on %(peril)s.  Will %(protagonist)s's love for %(peril)s destroy everything that %(protagonist)s and %(partner)s have achieved together?"},
                    ]
      });
  }

  handleRegenerate(e){
    var idx = this.state.plot;
    var data = {
      protagonist: this.state.protagonist,
      partner: this.state.partner,
      peril: this.state.peril,
      place: this.state.place,
      passion: this.state.passion,
      power: this.state.power,
    } 
    var text = sprintf(this.state.plots[idx].format, data) 
    this.setState(
      { 
        plotTitle: this.state.plots[idx].title, 
        narative: text
      }
    );
  }

  handleGenerate(e){
    var idxRnd = Math.floor(Math.random() * this.state.plots.length);
    //this.setState({plot: idxRnd});
    //this.handleRegenerate();
    this.setState({plot: idxRnd}, this.handleRegenerate);
  }

  handleChangeProtagonist(e){this.setState({protagonist: e.target.value});}
  handleChangePartner(e){this.setState({partner: e.target.value});}
  handleChangePeril(e){this.setState({peril: e.target.value});}
  handleChangePassion(e){this.setState({passion: e.target.value});}
  handleChangePlace(e){this.setState({place: e.target.value});}
  handleChangePower(e){this.setState({power: e.target.value});}

  render() {
    return (
      <div>
        <WidgetMenu qString={this.state.qString} />
          <Grid className="PageTop">
            <h1>Plots</h1>
            <h2>Actors</h2>
            <Form horizontal>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>Protagonist</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Protagonist"
                   onChange={this.handleChangeProtagonist} value={this.state.protagonist} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>Partner</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Partner" 
                  onChange={this.handleChangePartner} value={this.state.partner} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>Place</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Place" 
                  onChange={this.handleChangePlace} value={this.state.place} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>Peril</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Peril" 
                  onChange={this.handleChangePeril} value={this.state.peril}/></Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>Passion</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Passion" 
                  onChange={this.handleChangePassion} value={this.state.passion} /></Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>Power</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Power" 
                  onChange={this.handleChangePower} value={this.state.power} /></Col>
                </FormGroup>
            </Form>
            <p>
              <Button bsStyle="success" bsSize="large" onClick={this.handleGenerate}>Generate</Button>
              &nbsp;
              <Button bsStyle="success" bsSize="large" onClick={this.handleRegenerate}>Regenerate</Button>
              &nbsp;
              <Button bsStyle="primary" bsSize="large" onClick={this.handleReset}>Reset</Button>
            </p>
            <h2>Result</h2>
            <p>Plot No. {this.state.plot}, Title: <i> {this.state.plotTitle}</i></p>
            <p>Story: <b>{this.state.narative}</b></p>
            <h2>Instructions</h2>
            <p>Generate will choose a random plot</p>
            <p>Regenerate will re-apply the values to the current plot</p>
            <p>Reset returns the page to factory settings.</p>
            <p>A plot title ending in '(7) indicates the source is <a href='https://en.m.wikipedia.org/wiki/The_Seven_Basic_Plots'>The Seven Basic Plots</a>.</p>
            <p>A plot title ending in '(36)' indicates the source is <a href='https://en.wikipedia.org/wiki/The_Thirty-Six_Dramatic_Situations'>The Thirty Six Dramatic Situations</a>.</p>
          </Grid>
        
      </div>
    );
  }
}

export default PagePlots;
