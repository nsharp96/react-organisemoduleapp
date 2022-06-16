import './Modules.css';
import Module from './Module';

const Modules = ({modules, onDelete}) => {

  

  return (
    <div className='moduleContainer'>
      {modules.map((module) => (
       <Module key={module.ModuleID} module={module} onDelete={onDelete} />
      ))}

    </div>
  )
}

export default Modules;