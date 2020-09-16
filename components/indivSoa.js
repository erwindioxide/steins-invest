// create component parent div
const indivSoa = document.createElement('div');


// create the modal component
indivSoa.innerHTML = `
<div class="modal fade" id="soarequest" role="dialog">
<div class="modal-dialog" role="document">
		<div class="modal-content">
				<div class="modal-header d-flex align-items-center">
						<h5 class="text-left claimHeader">
								Statement of Account Request
						</h5>
						<br />
						<h5 class="text-secondary font-weight-bold text-right ml-auto p-2" data-dismiss="modal">
								X
						</h5>
				</div>
				<div class="modal-body">
						<div role="document">
								<div class="d-flex">
										<p class="claimHeader font-italic">For</p>
										&nbsp;
										<p class="claimHeader font-italic" id="fundnamesoa"></p>
								</div>
								<form action="https://rampver.com/soarequest2020/#wpcf7-f12001-o1" method="post">
										<div style="display: none;">
												<input type="hidden" name="_wpcf7" value="12001" />
												<input type="hidden" name="_wpcf7_version" value="5.1.6" />
												<input type="hidden" name="_wpcf7_locale" value="en_US" />
												<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f12001-o1" />
												<input type="hidden" name="_wpcf7_container_post" value="0" />
										</div>
										<input type="hidden" name="mutual_fund" id="soafundname" />
										<div class="form-group">
												<label for="account_name" class="claimHeader">Full Name*</label>
												<input type="text" class="form-control" name="account_name" required
														placeholder="Account Name" id="account_name" />
										</div>
										<div class="form-group">
												<label for="email_second" class="claimHeader">Email Address*</label>
												<input type="email" class="form-control" name="email_second" required
														placeholder="Registered Email Address" id="email_second" />
										</div>
										<div class="form-group">
												<label for="folio_number" class="claimHeader">Folio Number/ Account
														Number*</label>
												<input type="text" class="form-control" required
														placeholder="Folio Number/ Account Number" name="folio_number"
														id="folio_number" />
										</div>
										<div class="form-group">
												<label class="claimHeader" for="question">Any questions for us?</label>
												<br />
												<textarea type="text" name="question" class="form-control" cols="30"
														rows="5" placeholder="Your Message" id="messagesoa"></textarea>
										</div>
										<div class="mb-2">
												<small class="claimHeader font-italic">*Standard SOA requests takes 3-5
														banking days to be
														fulfilled.</small>
										</div>
										<div class="form-check">
												<input type="checkbox" class="form-check-input" name="consent" id="consent"
														required />
												<small class="text-secondary font-italic form-check-label" for="consent">
														I agree to receive regular updates, promotions, and
														recommendations regarding investments, insurance,
														healthcare, and personal finance from Rampver
														Financials. Visit
														<a href="rampver.com/privacy">rampver.com/privacy</a> for more info.
												</small>
										</div>
										<p class="text-center mt-4 mb-4">
												<input type="submit" value="Request for SOA"
														class="text-white btn rfbtn font-weight-bold" />
										</p>
										</div>
								</form>
						</div>
				</div>
		</div>
</div>
</div>
  `;

//append component to host page
document.getElementById('indivSoaSet').appendChild(indivSoa);