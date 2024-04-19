import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Faucet = ({withdrawError,withdrawSuccess,walletAddress,getKOKOHandler,transactionData}) => {
  

  return (
    <section className="skill" id="faucet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <div className="newsletter-bx wow slideInUp">
                        <div className="container has-text-centered main-content">
                            <h1 className="title is-1">KoKo Faucet</h1>
                              <h3>Get your free 1000 Koko / 30 days.</h3>
                                  <div className="mt-5">
                                      {withdrawError && (
                                      <div className="withdraw-error">{withdrawError}</div>
                                      )}
                                      {withdrawSuccess && (
                                      <div className="withdraw-success">{withdrawSuccess}</div>
                                      )}{" "}
                                      </div>
                                   <div className="box address-box">
                          <div className="columns">
                        <div className="new-email-bx">
                            <input
                                  className="input is-medium"
                                  type="text"
                                  placeholder="Enter your wallet address (0x...)"
                                  defaultValue={walletAddress}
                            />
                            <button className="button is-link is-medium" 
                             onClick={getKOKOHandler}
                             disabled={walletAddress ? false : true}>
                             GET KOKO TOKENS
                             </button>
                         </div>
              </div>
              </div>
              {/* <article className="panel is-grey-darker">
                <br></br>
                <h3 className="panel-heading">Transaction Data</h3>
                <div className="panel-block">
                <p>
                    {transactionData
                      ? `Transaction hash: ${transactionData}`
                      : "--"}
                </p>
                </div>
              </article> */}
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
</section>
  )
}
