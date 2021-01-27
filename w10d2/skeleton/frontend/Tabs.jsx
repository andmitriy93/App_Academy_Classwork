import React from 'react';


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: 0};  
    }

    render() {
        const titles = [];
        const tabs = this.props.tabs
        tabs.forEach(tab => {
            // let title = createElement('li');
            title.innerHTML = <h1>{tab.title}</h1>;
            titles.push(title)
        })
        return (
            <>
                <ul>
                    {titles}
                </ul>
                <article>
                    {tabs[this.state.id].content}
                </article>
            </>
        )
    }

};

export default Tabs;