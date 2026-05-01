import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function TestPageForm() {
  const mauticFormHTML = `
  <script type="text/javascript">
    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'http://localhost:8081/media/js/mautic-form.js?v79c0bbd4';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'http://localhost:8081';
        var MauticLang   = {
            'submittingMessage': "Please wait..."
        }
    }else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }
</script>

    <style type="text/css" scoped>
    .mauticform_wrapper { max-width: 600px; margin: 10px auto; }
    .mauticform-innerform {}
    .mauticform-post-success {}
    .mauticform-name { font-weight: bold; font-size: 1.5em; margin-bottom: 3px; }
    .mauticform-description { margin-top: 2px; margin-bottom: 10px; }
    .mauticform-error { margin-bottom: 10px; color: red; }
    .mauticform-message { margin-bottom: 10px; color: green; }
    .mauticform-row { display: block; margin-bottom: 20px; }
    .mauticform-label { font-size: 1.1em; display: block; font-weight: bold; margin-bottom: 5px; }
    .mauticform-row.mauticform-required .mauticform-label:after { color: #e32; content: " *"; display: inline; }
    .mauticform-helpmessage { display: block; font-size: 0.9em; margin-bottom: 3px; }
    .mauticform-errormsg { display: block; color: red; margin-top: 2px; }
    .mauticform-selectbox, .mauticform-input, .mauticform-textarea { width: 100%; padding: 0.5em 0.5em; border: 1px solid #CCC; background: #fff; box-shadow: 0px 0px 0px #fff inset; border-radius: 4px; box-sizing: border-box; }
    .mauticform-checkboxgrp-row {}
    .mauticform-checkboxgrp-label { font-weight: normal; }
    .mauticform-checkboxgrp-checkbox {}
    .mauticform-radiogrp-row {}
    .mauticform-radiogrp-label { font-weight: normal; }
    .mauticform-radiogrp-radio {}
    .mauticform-button-wrapper .mauticform-button.btn-default, .mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-default { color: #5d6c7c;background-color: #ffffff;border-color: #dddddd;}
    .mauticform-button-wrapper .mauticform-button, .mauticform-pagebreak-wrapper .mauticform-pagebreak { display: inline-block;margin-bottom: 0;font-weight: 600;text-align: center;vertical-align: middle;cursor: pointer;background-image: none;border: 1px solid transparent;white-space: nowrap;padding: 6px 12px;font-size: 13px;line-height: 1.3856;border-radius: 3px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}
    .mauticform-button-wrapper .mauticform-button.btn-default[disabled], .mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-default[disabled] { background-color: #ffffff; border-color: #dddddd; opacity: 0.75; cursor: not-allowed; }
    .mauticform-pagebreak-wrapper .mauticform-button-wrapper {  display: inline; }
</style>

<style type="text/css" scoped>
    .mauticform-field-hidden { display:none }
</style>
<div id="mauticform_wrapper_propertyenquiry" class="mauticform_wrapper">
    <form autocomplete="false" role="form" method="post" action="http://mautic.test/form/submit?formId=3" id="mauticform_propertyenquiry" data-mautic-form="propertyenquiry" enctype="multipart/form-data"><div class="mauticform-error" id="mauticform_propertyenquiry_error"></div>
            <div class="mauticform-message" id="mauticform_propertyenquiry_message"></div><div class="mauticform-innerform">
            <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">


      
  
    
  

    


          
<div id="mauticform_propertyenquiry_first_name" class="mauticform-row mauticform-text mauticform-field-1 mauticform-required" data-validate="first_name" data-validation-type="text">
  <label id="mauticform_label_propertyenquiry_first_name" for="mauticform_input_propertyenquiry_first_name" class="mauticform-label">First Name</label>
  
      <input type="text" name="mauticform[first_name]" value="" id="mauticform_input_propertyenquiry_first_name" placeholder="First Name" class="mauticform-input">
  
  <span class="mauticform-errormsg" style="display:none;">Enter Your First Name</span>
</div>



      
  
    
  

    


          
<div id="mauticform_propertyenquiry_last_name" class="mauticform-row mauticform-text mauticform-field-2 mauticform-required" data-validate="last_name" data-validation-type="text">
  <label id="mauticform_label_propertyenquiry_last_name" for="mauticform_input_propertyenquiry_last_name" class="mauticform-label">Last Name</label>
  
      <input type="text" name="mauticform[last_name]" value="" id="mauticform_input_propertyenquiry_last_name" placeholder="Last Name" class="mauticform-input">
  
  <span class="mauticform-errormsg" style="display:none;">Enter Your Last Name</span>
</div>



      
  
    
  

    


          
<div id="mauticform_propertyenquiry_email" class="mauticform-row mauticform-email mauticform-field-3 mauticform-required" data-validate="email" data-validation-type="email">
  <label id="mauticform_label_propertyenquiry_email" for="mauticform_input_propertyenquiry_email" class="mauticform-label">Email</label>
  
      <input type="email" name="mauticform[email]" value="" id="mauticform_input_propertyenquiry_email" placeholder="Email" class="mauticform-input">
  
  <span class="mauticform-errormsg" style="display:none;">Enter Your Email</span>
</div>




      
  
    
  

    



<div id="mauticform_propertyenquiry_phone" class="mauticform-row mauticform-tel mauticform-field-4">
  <label id="mauticform_label_propertyenquiry_phone" for="mauticform_input_propertyenquiry_phone" class="mauticform-label">Phone</label>
  
      <input type="tel" name="mauticform[phone]" value="" id="mauticform_input_propertyenquiry_phone" placeholder="Phone" class="mauticform-input">
  
  <span class="mauticform-errormsg" style="display:none;"></span>
</div>




      
  
    
  

    



<div id="mauticform_propertyenquiry_suburb__area" class="mauticform-row mauticform-text mauticform-field-5">
  <label id="mauticform_label_propertyenquiry_suburb__area" for="mauticform_input_propertyenquiry_suburb__area" class="mauticform-label">Suburb / Area</label>
  
      <input type="text" name="mauticform[suburb__area]" value="" id="mauticform_input_propertyenquiry_suburb__area" placeholder="Suburb / Area" class="mauticform-input">
  
  <span class="mauticform-errormsg" style="display:none;"></span>
</div>
<div id="mauticform_propertyenquiry_budget" class="mauticform-row mauticform-select mauticform-field-6">
  <label id="mauticform_label_propertyenquiry_budget" for="mauticform_input_propertyenquiry_budget" class="mauticform-label">Budget</label>  
  <select name="mauticform[budget]" value="" id="mauticform_input_propertyenquiry_budget" class="mauticform-selectbox">
    <option value=""></option>    <option value="1000000">10,00,000</option>      <option value="100000">1,00,000</option>      <option value="10000">10,000</option>      <option value="1000">1,000</option>  
  </select>
  <span class="mauticform-errormsg" style="display:none;"></span>
</div>



      

    


    



<div id="mauticform_propertyenquiry_f_message" class="mauticform-row mauticform-text mauticform-field-7">
  <label id="mauticform_label_propertyenquiry_f_message" for="mauticform_input_propertyenquiry_f_message" class="mauticform-label">Message</label>
  
      <textarea name="mauticform[f_message]" id="mauticform_input_propertyenquiry_f_message" class="mauticform-textarea">Message</textarea>
  
  <span class="mauticform-errormsg" style="display:none;"></span>
</div>


      
  
    
    
<div id="mauticform_propertyenquiry_submit" class="mauticform-row mauticform-button-wrapper mauticform-field-8">
  <button class="btn btn-default mauticform-button" name="mauticform[submit]" value="1" id="mauticform_input_propertyenquiry_submit" type="submit">Submit</button>
</div>
                  </div></div><input type="hidden" name="mauticform[formId]" id="mauticform_propertyenquiry_id" value="3">
        <input type="hidden" name="mauticform[return]" id="mauticform_propertyenquiry_return" value="">
        <input type="hidden" name="mauticform[formName]" id="mauticform_propertyenquiry_name" value="propertyenquiry">
        
    </form>
</div>

  `;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Test Page Form</h1>
        <p className="mb-4">
          This page is for testing Mautic form integration.
        </p>
        <div
          id="mautic-form-container"
          className="border border-gray-300 p-4 rounded"
          dangerouslySetInnerHTML={{ __html: mauticFormHTML }}
        />
      </main>
      <Footer />
    </div>
  );
}
