$(document).ready (function(){
  $('#year').html(new Date().getFullYear());

 const api ="https://api.cps.edu/schoolprofile/CPS/SchoolComparison?SchoolIDs=609720,609755,609726";
 const school_url = "https://schoolinfo.cps.edu/schoolprofile/SchoolDetails.aspx?"

  fetch(api)
  .then((resp) => resp.json()) //converting api data into JSON to fill html
  .then(function(data) {
    //not pretty, but works well. could be optimized with .appened()
    $(data[0]).each(function(){
      $(".col-md-4:first h2").text(this.SchoolShortName);
      $(".col-md-4:first li:nth-child(2)").text(this.Phone);
      $(".col-md-4:first li:nth-child(3)").text(this.AddressStreet);
      $(".col-md-4:first li:nth-child(4)").text(this.AddressCity);
      $(".col-md-4:first li:nth-child(5)").text(this.AddressState);
      $(".col-md-4:first li:nth-child(6)").text(this.AddressZipCode);
      $("col-md-4 a").attr("href", school_url + this.SchoolID);
    });

    $(data[1]).each(function(){
      $(".col-md-4:nth-child(2) h2").text(this.SchoolShortName);
      $(".col-md-4:nth-child(2) li:nth-child(2)").text(this.Phone);
      $(".col-md-4:nth-child(2) li:nth-child(3)").text(this.AddressStreet);
      $(".col-md-4:nth-child(2) li:nth-child(4)").text(this.AddressCity);
      $(".col-md-4:nth-child(2) li:nth-child(5)").text(this.AddressState);
      $(".col-md-4:nth-child(2) li:nth-child(6)").text(this.AddressZipCode);
      $("col-md-4 a").attr("href", school_url + this.SchoolID);
    });

    $(data[2]).each(function(){
      $(".col-md-4:nth-child(3) h2").text(this.SchoolShortName);
      $(".col-md-4:nth-child(3) li:nth-child(2)").text(this.Phone);
      $(".col-md-4:nth-child(3) li:nth-child(3)").text(this.AddressStreet);
      $(".col-md-4:nth-child(3) li:nth-child(4)").text(this.AddressCity);
      $(".col-md-4:nth-child(3) li:nth-child(5)").text(this.AddressState);
      $(".col-md-4:nth-child(3) li:nth-child(6)").text(this.AddressZipCode);
      $("col-md-4 a").attr("href", school_url + this.SchoolID);
    });

    });

  });
