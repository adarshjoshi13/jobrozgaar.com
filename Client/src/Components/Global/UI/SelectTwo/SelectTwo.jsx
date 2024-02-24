import React,{useEffect} from 'react';
import "./SelectTwo.css";
import SelectInput from '../Select Input/SelectInput'; // Import the SelectInput component
import AOS from 'aos';
import 'aos/dist/aos.css';

function SelectTwo({ label1, label2, onchange, value1, name1, name2, value2, hideLable, hidfeild ,options1,options2}) {
  const selectinput ={
    fontSize:"12px",
    padding:"8px"
  }
  const margin ={
    margin:"9px"
  }

  useEffect(() => {
    AOS.init({
        duration: 500,
        easing: 'ease-out',
        once: true
    });
}, []);
  return (
    <div className="container two-inputs" data-aos="fade-left">
      <div className="row">
        <div className="col-md-2 p-0 d-flex align-items-center">
          <h5 className={`lable ${hideLable ? "hide" : ''}`}>{label1}</h5>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4 d-flex p-0 justify-content-start align-items-center">
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              {/* Replace input with SelectInput */}
              <SelectInput selectinput={selectinput} margin={margin} name={name1} value={value1} handleChange={onchange} options={options1}  />
            </div>
            <div className={`col-md-6 d-flex p-0 justify-content-start align-items-center input2 ${hidfeild ? "hide" : ""}`}>
              <div className="h5-cover">
                <h5 style={{ margin: "4px" }} className='lable'>{label2}</h5>
              </div>

              <div className='d-flex justify-content-center align-items-center w-100'>
                <img style={{ width: "30px", height: "30px" }} src="/Utility/check.png" alt="" />
                {/* Replace input with SelectInput */}
                <SelectInput selectinput={selectinput} margin={margin} name={name2} value={value2} handleChange={onchange} options={options2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectTwo;