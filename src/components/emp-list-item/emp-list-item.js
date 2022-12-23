// import { Component} from 'react';
import './emp-list-item.css';

const EmpListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         promotion: false
    //     }
    // }

    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // onPromotion = () => {
    //     this.setState(({promotion}) => ({
    //         promotion: !promotion
    //     }))
    // } МИ ВИКОРИСТВОВВАЛИ СПОТАТЧКУ ЦЕ ЛОКАЛЬНО(В ДАТІ МИ НЕ ЗМІНЮВАЛИ ЗНАЧЕННЯ), ТЕПЕР ЇХ КОМЕНТУЄМО І ПИШЕМО КОД НА ГЛОБАЛЬНУ ВИДИМІСТЬ (ВИДАЛЯЄМО ТАКОЖ КОНСТРУКТОР БО ЙОГО НЕ ВИКОРИСТОВУЄМО) => І ЗНОВУ ПЕРЕРОБЛЯЄМО В ФУНКЦІОНАЛЬНИЙ КОМПОНЕНТ

    
    const {name, salary, onDelete, onToggleProp, increase, promotion} = props;
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }

    if (promotion) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle='promotion'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$' }/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " onClick={onToggleProp} data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

    
export default EmpListItem;