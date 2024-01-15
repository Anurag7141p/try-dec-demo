import { useMediaQuery } from '@react-hook/media-query';
import Inventory from '../../components/user/inventory';
import ProfileMobile from '../../components/user/mobileview/profileMobile';
const UserProfile = ()=>{

    const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <ProfileMobile/>:<Inventory />;

      
}
export default UserProfile ;
