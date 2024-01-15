import { useMediaQuery } from '@react-hook/media-query';
import HandleCreateStore from '../../components/store/handleCreateStore';
import HandleMobile from '../../components/store/mobileView/handleMobile';
const CreateStore = ()=>{

    const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <HandleMobile/>:<HandleCreateStore />;

      
}
export default CreateStore ;
