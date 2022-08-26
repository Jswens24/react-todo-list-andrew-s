import React from 'react';
import Item from './Item';

const ListTasks = (props) => {
    const listDisplay = props.list.map(todo => <Item task={todo} />)

    return (
        <div>
            {listDisplay}
        </div>
    )
};

export default ListTasks