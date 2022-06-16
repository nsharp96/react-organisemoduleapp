 import './Module.css';
 import Button from '../components/Button';
 import CardContainer from '../layouts/CardContainer';
 import Modules from '../components/Modules.js';
 import { useState } from 'react';
 import EditModule from '../components/EditModule';
 
 const ModulesPage = () => {
     //Properties

     const [modules, setModules] = useState([
        {
          ModuleID: 1,
          ModuleName: "Games Programming",
          ModuleCode: "CI2270",
          ModuleLevel: 4,
          ModuleLeaderID: 1,
          ModuleImage: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
          ModuleFav: true
        },
        {
          ModuleID: 2,
          ModuleName: "Individual Project",
          ModuleCode: "CI7446",
          ModuleLevel: 7,
          ModuleLeaderID: 2,
          ModuleImage: "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg",
          ModuleFav: false
        },
        {
          ModuleID: 3,
          ModuleName: "Database Driven Web Applications",
          ModuleCode: "CI6388",
          ModuleLevel: 6,
          ModuleLeaderID: 3,
          ModuleImage: "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg",
          ModuleFav: true
        },
        {
          ModuleID: 4,
          ModuleName: "Advanced Data Modelling",
          ModuleCode: "CI8502",
          ModuleLevel: 6,
          ModuleLeaderID: 4,
          ModuleImage: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg",
          ModuleFav: false
        },
        {
          ModuleID: 5,
          ModuleName: "Ethical Hacking",
          ModuleCode: "CI7572",
          ModuleLevel: 7,
          ModuleLeaderID: 5,
          ModuleImage: "https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg",
          ModuleFav: true
        },
        {
          ModuleID: 6,
          ModuleName: "Network and Mobile Forensics",
          ModuleCode: "CI5068",
          ModuleLevel: 7, 
          ModuleLeaderID: 6, 
          ModuleImage: "https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg",
          ModuleFav: true
        },
        {
          ModuleID: 7,
          ModuleName: "Practical Data Analyst Skills",
          ModuleCode: "CI9213",
          ModuleLevel: 5,
          ModuleLeaderID: 7,
          ModuleImage: "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
          ModuleFav: false
        },
        {
          ModuleID: 8,
          ModuleName: "Statistics in Practice",
          ModuleCode: "CI5856",
          ModuleLevel: 7,
          ModuleLeaderID: 8,
          ModuleImage: "https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg",
          ModuleFav: false
        },
        {
          ModuleID: 9,
          ModuleName: "Internet Services and Protocols",
          ModuleCode: "CI3651",
          ModuleLevel: 7,
          ModuleLeaderID: 9,
          ModuleImage: "https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg",
          ModuleFav: true
        },
        {
          ModuleID: 10,
          ModuleName: "High Level Game Development",
          ModuleCode: "CI7952",
          ModuleLevel: 5,
          ModuleLeaderID: null,
          ModuleImage: "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg",
          ModuleFav: false
        }
      ])

     //Context

     //Hooks

     //Methods

     //Delete Module
     const deleteModule = (moduleId) => {
         setModules(modules.filter((module) => module.ModuleID !== moduleId))
     }

     //Toggle Favourite
     const toggleFav = (moduleId) => {
        setModules(modules.map((module) => module.ModuleID === moduleId ? { ...module, ModuleFav: !module.ModuleFav} : module))
     }

     //Edit Module
     const editModule = (moduleId) => { 
        console.log(moduleId)
    }

     const ListAll = () => {
        
     }

     const ListFav = () => {
         setModules(modules.filter((module) => module.ModuleFav === true))
     }
     
     //View

     return(
         <div>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <h1>My Modules</h1>
             <div className="moduleButtons">
                <Button
                    className="listButton"
                    type="button"
                    text="List all"
                    icon="fa fa-list" 
                    onClick = {ListAll}
                />
                <Button
                    className="listButton"
                    type="button"
                    text="List favourites"
                    icon="fa fa-heart"
                    onClick = {ListFav}
                />
             </div>
            {modules.length>0 ? <Modules modules={modules} onDelete={deleteModule} onFav={toggleFav} onEdit={editModule}/> : "You are not currently enrolled on any modules."}
            {/* <EditModule /> */}
             
         </div>
         

     );
 }

 export default ModulesPage;