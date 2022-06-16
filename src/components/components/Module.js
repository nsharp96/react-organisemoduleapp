import './Module.css';
import Button from './Button.js';

const Module = ( {module, onDelete, onFav, onEdit} ) => {
    //Properties
    //Context
    //Hooks
    //Methods
    //View
    return (
        <div className="moduleCard">
            <img className='moduleImg' src={module.ModuleImage} />
            {module.ModuleFav === true ? <div className='heart'><i className="heart fa fa-heart"></i></div> : null}
            <p className='moduleName'> {module.ModuleName} ({module.ModuleCode}) </p>
            <p className='moduleLevel'>Level {module.ModuleLevel}</p>
            <div className='buttonContainer'>
                <Button 
                    type="button"
                    icon="fa fa-check"
                    className="moduleButton"
                    onClick={() => onFav(module.ModuleID)}
                />
                <Button 
                    type="button"
                    icon="fa fa-pencil"
                    className="moduleButton"
                    onClick={() => onEdit(module.ModuleID)}
                />
                <Button 
                    type="button"
                    icon="fa fa-trash"
                    className="moduleButton"
                    onClick={() => onDelete(module.ModuleID)}
                /> 
            </div>
            
        </div>

    )
}

export default Module;