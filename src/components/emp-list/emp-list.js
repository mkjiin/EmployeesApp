import EmpListItem from '../emp-list-item/emp-list-item';
import './emp-list.css';

const EmpList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(el => {
        const {id, ...elProps} = el
        return (
            <EmpListItem 
            key={id}
            {...elProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;