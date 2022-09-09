import Header from "../components/header";
import user from '../store/user'
import persons from '../store/persons'
import fileStorage from '../store/file-storage'
import { observer } from "mobx-react-lite";

import FileStorage from "../components/file-storage";
import Footer from "../components/footer";

import youngSpecialist from "../img/young-specialist.jpg"

const FSYoungSpecialistPage: React.FC = () => {

    return (
      <>
      <Header />      
          <FileStorage storage={fileStorage.getLibrary("Молодому специалисту")}
                       title="Информация для молодых специалистов"
                       user={user.data}
                       personById={persons.getById.bind(persons)}
                       add={fileStorage.add.bind(fileStorage)}
                       remove={fileStorage.remove.bind(fileStorage)}
                       meta={["Комментарии"]}
                       imgOptional={youngSpecialist}                  
          />

      <Footer />    
      </>
      
      )
  }
    
export default observer(FSYoungSpecialistPage);