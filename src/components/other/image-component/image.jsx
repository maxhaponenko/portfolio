import React from 'react';
import { Spinner } from 'reactstrap';

export default class Image extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 300)
    }

    render() {

        const { src, className, style } = this.props

        return (
            <React.Fragment>
                {!this.state.loaded ? (
                    <Spinner size="md" color="primary" />
                ) : (
                    <img 
                        ref={this.image}    
                        style={style ? style : null} 
                        className={className ? `${className}` : ''} 
                        src={src} 
                        onLoad={this.handleImageLoaded}
                        alt={src.toString()}>
                    </img>
                )}

            </React.Fragment>

        )
    }
} 


