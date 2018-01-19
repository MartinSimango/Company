<!-- Trigger the modal with a button -->
<!--<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>-->

<!-- Modal -->
<div id="myModalSuccess" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Email Successful</h4>
      </div>
      <div class="modal-body">
        <p>Your email was successfully sent</p>
      </div>
      <div class="modal-footer">
      <a href="index.php" class="btn btn-success"> OK </a>
       <!--/ <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>-->
      </div>
    </div>

  </div>
</div>

<div id="myModalFail" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Email Error</h4>
      </div>
      <div class="modal-body">
        <p>Your email failed to be sent! Please check your email address.</p>
      </div>
      <div class="modal-footer">
      <a href="index.php#contact" class="btn btn-danger modal_link_fail" data-dismiss="modal"> OK </a>
      <!--<button type="button" class="btn btn-primary" data-dismiss="modal">Try Again</button>-->
      </div>
    </div>

  </div>
</div>