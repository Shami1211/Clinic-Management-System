import React from 'react';
import MamberMainHeader from './MainMemberHeader';
import Icon from './MemberMainH1/Photos/Icon.png'
import mm from './MemberMainH1/Photos/mm.png'

export default function MainHomeMember() {
  return (

    <div>
      <MamberMainHeader /><br/> <br></br><br></br>
    <div className='phome-containerrr'> 
      
      

        <div className='ful-logr'>
      
      <div className='full-logr'>
        


        <div className='h-1-phtooi'>
          <img src={Icon} className="h-1-p2" alt="signin logo" /> 
        </div>

        <h1 className='ph-h1-labr'>Staff Management</h1>
        <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
      
      </div>

      <div className='full-logr'>

        <div class="logoor">
          <img src={mm} className="lb-lg-pr000" alt="signin logo"/> 
        </div>

      </div>

</div>



</div>
</div>

  )
}
