import './Module.css';
import Button from './Button.js';

const Module = ( {module, onDelete} ) => {
    //Properties
    //Context
    //Hooks
    //Methods
    //View
    return (
        <div className="moduleCard">
            <img className='moduleImg' src={module.ModuleImage} />
            <p className='moduleName'> {module.ModuleName} ({module.ModuleCode}) </p>
            <p className='moduleLevel'>Level {module.ModuleLevel}</p>
            <div className='buttonContainer'>
                <Button 
                    type="button"
                    icon="fa fa-check"
                    className="moduleButton"
                />
                <Button 
                    type="button"
                    icon="fa fa-pencil"
                    className="moduleButton"
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