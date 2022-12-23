import './app-filter.css'

const AppFilter  = (props) => {

    const onFilterPromotion = () => {
        props.onFilter('promotion')    
    }

    const onFilterIncrease = () => {
        props.onFilter('moreThan1000')
    }

    const onFilterDefaul = () => {
        props.onFilter('default')
    }

    
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type='button'
                onClick={onFilterDefaul}>
                    Всі співробітники
            </button>
            <button 
                className="btn btn-outline-light"
                type='button'
                onClick={onFilterPromotion}>
                    На підвищення
            </button>
            <button 
                className="btn btn-outline-light"
                type='button'
                onClick={onFilterIncrease}>
                    З/П більше 1000$
            </button>
        </div>
    );
}

export default AppFilter;