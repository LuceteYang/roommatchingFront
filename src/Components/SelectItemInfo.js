/**
 * Created by User on 2016-08-12.
 */
import React from 'react';
class SelectItemInfo extends React.Component {

    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    render() {
        console.log("rendered: " + this.props.name);

        let getStyle = isSelect => {
            if(!isSelect){
                let style = {
                    width:"200px",
                    height:"200px",
                    float:"left",
                    fontWeight: 'bold',
                    verticalAlign: "middle",
                    backgroundImage:'url('+this.props.img+')'
                };
                return style;
            }else{
                let style = {
                    width:"200px",
                    height:"200px",
                    float:"left",
                    fontWeight: 'bold',
                    "vertical-align": "middle",
                    backgroundcolor:'#fff'
                };
                return style;
            }
        };

        return(
            <div style={getStyle(this.props.isSelected)}
                 onClick={this.handleClick.bind(this)}>
            </div>
        );
    }
}
export default SelectItemInfo;