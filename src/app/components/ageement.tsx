"use client";
export const Agreement = (props: {
  consentPersonal: boolean;
  setConsentPersonal: (value: boolean) => void;
  consentImprove: boolean;
  setConsentImprove: (value: boolean) => void;
}) => {
  console.log(props.consentImprove, props.consentPersonal);
  return (
    <>
      <div className="fw-bold text-center pe-4">
        PDPA <br />
        <span className="subtitle-pdpa">(Personal Data Protection Act)</span>
        <div
          data-bs-spy="scroll"
          className="text-start mt-3 scrollbar px-2 text-justify"
        >
          <div className="indent">
            We are reaching out to request your consent for the collection, use,
            and processing of your personal data in accordance with the Personal
            Data Protection Act (PDPA). The purpose of collecting your data is
            to provide services, improve customer experience promotion, or send
            relevant updates.
          </div>
          <br />
          <div className="indent">
            Your personal data will be handled with the utmost security and
            confidentiality. We will not disclose or share your information with
            third parties without your explicit consent, except where required
            by law. If you agree to grant us permission to process your personal
            data, kindly confirm by checkbox for agree.
          </div>
        </div>
      </div>
      <div className="form-check">
        <div className="px-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="check1"
            name="consentPersonal"
            checked={props.consentPersonal}
            onChange={(e) => props.setConsentPersonal(e.target.checked)}
          />
          <label className="form-check-label">
            Consent to Provide Personal Data
          </label>
        </div>
        <div className="px-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="check2"
            name="consentImprove"
            checked={props.consentImprove}
            onChange={(e) => props.setConsentImprove(e.target.checked)}
          />
          <label className="form-check-label">
            Consent for Data Usage to Improve Product Sevice or Offer
          </label>
        </div>
      </div>
    </>
  );
};
