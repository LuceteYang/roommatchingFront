/**
 * Created by User on 2016-08-12.
 */
import React from 'react';
class SelectItemInfo extends React.Component {

    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    render() {

        let getStyle = isSelect => {
            if(!isSelect){
                let style = {
                    width:"160px",
                    height:"160px",
                    display:"inline-block",
                    backgroundColor:"white",
                    backgroundImage:'url('+this.props.img+')'
                };
                return style;
            }else{
                let style = {
                    width:"160px",
                    height:"160px",
                    display:"inline-block",
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