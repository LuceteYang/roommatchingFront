import React from 'react';

var  Choiceform = React.createClass({
    render : function(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form>
                    <input type="radio" name="fruit" value="orange" />아침형 8시 이전
                    <input type="radio" name="fruit" value="watermelon" />보통형 8시 이후 9시 이전
                    <input type="radio" name="fruit" value="watermelon" />상관없어요
                </form>
            </div>
        );
    }
});

export default Choiceform;
