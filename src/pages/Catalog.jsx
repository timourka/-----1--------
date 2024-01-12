// import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import './catalog.css';

const Catalog = () => {
  const navigate = useNavigate();

    return (
        <>
        <div className="row">
        <div className="col-4 h-100 w-25">
          <div id="list-dresses" className="list-group">
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-1" >Вечернее платье пышное</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-2">Вечернее платье прямое</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-3">Вечернее платье русалка</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-4">Вечернее платье ампир</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-5">Вечернее платье принцесса</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-6">Свадебное платье пышное</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-7">Свадебное платье прямое</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-8">Свадебное платье русалка</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-9">Свадебное платье ампир</a>
            <a className="list-group-item list-group-item-action" style={{ color: 'white', backgroundColor: '#50028C' }} href="#list-item-10">Свадебное платье принцесса</a>
          </div>
        </div>
        <div className="col-8">
          <div data-bs-spy="scroll" data-bs-target="#list-dresses" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div id = "list-item-1" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                    <img src="src/assets/платье вечернее пышное.png" className="cards card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <a href="#" onClick={ () => { navigate(`/Category/${1}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} > Вечернее платье пышное</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div id = "list-item-2" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                    <img src="src/assets/платье вечернее прямое.png" className="cards card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <a href="#" onClick={ () => { navigate(`/Category/${2}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} > Вечернее платье прямое</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div id = "list-item-3" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                    <img src="src/assets/вечернее платье русалка.png" className="cards card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <a href="#" onClick={ () => { navigate(`/Category/${3}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} > Вечернее платье русалка</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div id = "list-item-4" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                    <img src="src/assets/вечернее платье ампир.png" className="cards card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <a href="#" onClick={ () => { navigate(`/Category/${4}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} > Вечернее платье ампир</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                    <div id = "list-item-5" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                      <img src="src/assets/платье вечернее принцесса.png" className="cards card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                          <a href="#" onClick={ () => { navigate(`/Category/${5}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} >Вечернее платье принцесса</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div id = "list-item-6" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                      <img src="src/assets/платье свадебное пышное.png" className="cards card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                          <a href="#" onClick={ () => { navigate(`/Category/${6}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} >Свадебное платье пышное</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div id = "list-item-7" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                      <img src="src/assets/свадебное платье.png" className="cards card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                          <a href="#" onClick={ () => { navigate(`/Category/${7}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} >Свадебное платье прямое</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div id = "list-item-8" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                      <img src="src/assets/свадебное платье русалка.png" className="cards card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                          <a href="#" onClick={ () => { navigate(`/Category/${8}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} >Свадебное платье русалка</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div id = "list-item-9" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                      <img src="src/assets/свадебное платье ампир.png" className="cards card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                          <a href="#" onClick={ () => { navigate(`/Category/${9}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} >Свадебное платье ампир</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div id = "list-item-10" className="card h-100" style={{ color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline' }} >
                      <img src="src/assets/свадебное платье принцесса.png" className="cards card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                          <a href="#" onClick={ () => { navigate(`/Category/${10}`); }} style={{
 color: 'white', backgroundColor: '#1C7AAF', textDecoration: 'underline', fontSize: 'large',
}} >Свадебное платье принцесса</a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Catalog;
