import React from 'react';

export default class ColumnListResponsive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            oneItemHeight: undefined,
            maxColumns: this.props.maxColumns,
            displayColumns: this.props.maxColumns,
            breakpoints: this._sortBreakpoints(this.props.breakpoints),
            columnMatrix: undefined,
            calculatingDimensions: false, 
            itemsVisibility: false
        }
    }

    _getColumnsMatrix() {
        let maxColumns = this.props.maxColumns;
        let breakpoints = this._sortBreakpoints(this.props.breakpoints);
        let resultObject = {}
        for (let i = 1; i < maxColumns+1; i++) {
            resultObject[i] = breakpoints[breakpoints.length-i]
        }
        this.setState({
            columnMatrix: resultObject
        })
    }

    componentDidMount() {
        this._getColumnsMatrix()
        setTimeout(() => {
            if (this.getItemHeight() !== undefined) {
                this.setState({
                    oneItemHeight: this.getItemHeight(),
                    itemsVisibility: true
                }, this.changeColumnsConfiguration())
            }
        }, 200)
        window.addEventListener('resize', this.changeColumnsConfiguration.bind(this))
        this.checkForErrors()
    }

    changeColumnsConfiguration(){
        let windowWidth = window.innerWidth;
        let columnMatrix = this.state.columnMatrix;
        if (this.state.maxColumns === 5) {
            this.adaptColumnMatrixForFiveColumns(windowWidth, columnMatrix)
        } else if (this.state.maxColumns === 4) {
            this.adaptColumnMatrixForFourColumns(windowWidth, columnMatrix)
        } else if (this.state.maxColumns === 3) {
            this.adaptColumnMatrixForThreeColumns(windowWidth, columnMatrix)
        } else if (this.state.maxColumns === 2) {
            this.adaptColumnMatrixForTwoColumns(windowWidth, columnMatrix)
        }
    }

    adaptColumnMatrixForTwoColumns(windowWidth, columnMatrix) {
        if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== this.state.maxColumns) {
                this.setState({
                    displayColumns: this.state.maxColumns
                })
            }
        } else if (windowWidth <= columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 1)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 1)
                })
            }
        }
    }
    adaptColumnMatrixForThreeColumns(windowWidth, columnMatrix) {
        if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== this.state.maxColumns) {
                this.setState({
                    displayColumns: this.state.maxColumns
                })
            }
        } else if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-2] && windowWidth <= columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 1)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 1)
                })
            }
        } else if (windowWidth <= columnMatrix[Object.keys(columnMatrix).length-2]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 2)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 2)
                })
            }
        }
    }
    adaptColumnMatrixForFourColumns(windowWidth, columnMatrix) {
        if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== this.state.maxColumns) {
                this.setState({
                    displayColumns: this.state.maxColumns
                })
            }
        } else if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-2] && windowWidth <= columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 1)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 1)
                })
            }
        } else if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-3] && windowWidth <= columnMatrix[Object.keys(columnMatrix).length-2]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 2)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 2)
                })
            }
        } else if (windowWidth <= columnMatrix[Object.keys(columnMatrix).length-3]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 3)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 3)
                })
            }
        }
    }
    adaptColumnMatrixForFiveColumns(windowWidth, columnMatrix) {
        if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== this.state.maxColumns) {
                this.setState({
                    displayColumns: this.state.maxColumns
                })
            }
        } else if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-2] && windowWidth <= columnMatrix[Object.keys(columnMatrix).length-1]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 1)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 1)
                })
            }
        } else if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-3] && windowWidth <= columnMatrix[Object.keys(columnMatrix).length-2]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 2)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 2)
                })
            }
        } else if (windowWidth > columnMatrix[Object.keys(columnMatrix).length-4] && windowWidth <= columnMatrix[Object.keys(columnMatrix).length-3]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 3)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 3)
                })
            }
        } else if (windowWidth <= columnMatrix[Object.keys(columnMatrix).length-4]) {
            if (this.state.displayColumns !== (this.state.maxColumns - 4)) {
                this.setState({
                    displayColumns: (this.state.maxColumns - 4)
                })
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeColumnsConfiguration)
    }

    checkForErrors() {
        if (this.state.maxColumns - 1 !== this.state.breakpoints.length) {
            console.error(`<ColumnListResponsive /> --> Number of 'breakpoints' in array should be less than 'maxColumns' by 1`)
        }
    }

    getItemHeight() {
        return this.itemRef1.offsetHeight
    }

    _sortBreakpoints(...breakpoints) {
        let array = [];
        array = breakpoints
        let sortedBreakpoints = array.sort((a,b) => {
            if (b < a) return 1;
            if (b > a) return -1;
            if (a === b) return 0;
        });
        return sortedBreakpoints[0]
    }

    render() {

        const getItemWidth = (maxColumns) => {
            return `${100 / maxColumns}%`
        }


        const getMaxHeight = () => {
            let totalItemsHeight = (this.state.oneItemHeight * this.state.items.length)
            let result = (totalItemsHeight / (this.state.displayColumns)) + 20
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
            width: getItemWidth(this.state.displayColumns),
            height: 'auto',
            visibility: getCurrentVisibility()
        }

        console.log(this.state)

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