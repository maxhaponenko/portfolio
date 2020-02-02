import React from 'react';

export default class ColumnListResponsive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            oneItemMaxHeight: undefined,
            maxColumns: this.props.maxColumns,
            breakpoints: this.props.breakpoints,
            calculatingDimensions: false, 
            itemsVisibility: false
        }
    }

    componentDidMount() {
        this.checkForErrors()
        setTimeout(() => {
            if (this.getItemHeight() !== undefined) {
                this.setState({
                    oneItemMaxHeight: this.getItemHeight(),
                    itemsVisibility: true
                }, console.log(this.getItemHeight()))
            }
        }, 500)
        
    }

    checkForErrors() {
        if (this.state.maxColumns - 1 !== this.state.breakpoints.length) {
            console.error(`<ColumnListResponsive /> --> Number of 'breakpoints' in array should be less than 'maxColumns' by 1`)
        }
    }

    getItemHeight() {
        return this.itemRef1.offsetHeight
    }

    render() {

        const getItemWidth = (maxColumns) => {
            return `${100 / maxColumns}%`
        }


        const getMaxHeight = () => {
            let totalItemsHeight = (this.state.oneItemMaxHeight * this.state.items.length) + 50
            let result = totalItemsHeight / (this.state.maxColumns - (1 / this.state.maxColumns))
            console.log(`${result}px`)
            return `${result}px`
        }

        const getCurrentVisibility = () => {
            if (this.state.itemsVisibility === false) {
                return 'hidden'
            } else {
                return 'visible'
            }
        }

        const columnsBlock = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: '100%',
            maxHeight: getMaxHeight()
        }
        const columnItem = {
            width: getItemWidth(this.props.maxColumns),
            height: 'auto',
            visibility: getCurrentVisibility()
        }


        return (
            <div style={columnsBlock}>
                {this.state.items.map((item, index) => {
                    return (
                        <div key={index} ref={ el => this[`itemRef${index}`] = el } style={columnItem} dangerouslySetInnerHTML={{__html: item}}>
                        </div>
                    )
                })}
            </div>
        )
    }
}