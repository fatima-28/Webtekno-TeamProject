import React from 'react'
import './OfficialDelivery.scss'

export const OfficialDelivery = () => {
  return (
      <main id="delivery-main">

          <form action="#">
              <div className="delivery-main-box">
                  <div className="delivery-page">
                      <h1>Alış Müraciəti</h1>
                      <div className="buy-request-box">
                          <h2>Alış Müraciəti</h2>
                          <h3>Kredit Müraciəti</h3>

                      </div>
                  </div>
                  <div className="delivery-total-info">
                      <h3>Cəmi: 1380₼</h3>
                      <h3>Çatdırılma: 0₼</h3>
                      <h2>Yekun: 1380₼</h2>
                  </div>
              </div>
              <div className="delivery-inputs-mainbox">
                  <div className="delivery-inuts">
                      <div className="delivery-inputs-single">
                          <span className="label-info">Ad</span>
                          <input required type="text" placeholder="Ad"/>
                      </div>
                      <div className="delivery-inputs-single">
                          <span className="label-info">Soyad</span>
                          <input required type="text" placeholder="Soyad"/>
                      </div>
                      <div className="delivery-inputs-single">
                          <span className="label-info">Ata adı</span>
                          <input required type="text" placeholder="Ata ad"/>
                      </div>
                      <div className="delivery-inputs-single">
                          <span className="label-info">Telefon nömrəs</span>
                          <input required type="number" placeholder="0990372827"/>
                      </div>
                      <div className="delivery-inputs-single">
                          <span className="label-info">Şəxsiyyət vəsiqəsinin FİN kodu</span>
                          <input required type="text" placeholder="FİN kodu"/>
                      </div>
                      <div className="delivery-inputs-single">
                          <span className="label-info">Şəhər telefon nömrəsi</span>
                          <input required type="text" placeholder="Telefon"/>
                      </div>
                      <div className="delivery-inputs-single-long">
                          <span className="label-info">Şəxsiyyət seria nömrəsi</span>
                          <input required type="text" placeholder="Şəxsiyyət seria nömrəsi"/>
                      </div>
                      <div className="delivery-inputs-single-long">
                          <span className="label-info">Əlavə qeydlər</span>
                          <input required type="text" placeholder="Əlavə qeydlər"/>
                      </div>
                      <div className="delivery-main-box">
                          <div className="delivery-page-second">
                              <h2>Çatdırılma ünvanı</h2>
                              <div className="delivery-inputs-mainbox">
                                  <div className="delivery-inuts">


                                      <div className="delivery-inputs-single-long">
                                          <span className="label-info">Şəhər</span>
                                          <input required type="text" placeholder="Şəhər"/>
                                      </div>

                                      <div className="delivery-inputs-single-long">
                                          <span className="label-info">Rayon</span>
                                          <input required type="text" placeholder="Rayon"/>
                                      </div>
                                      <div className="delivery-inputs-single-long">
                                          <span className="label-info">Ünvan</span>
                                          <input required type="text" placeholder="Ünvan "/>
                                      </div>

                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              <div className="button-delivery">
                  <button>Sifarishi testiqle</button>
              </div>
          </form>

      </main>
  )
}
