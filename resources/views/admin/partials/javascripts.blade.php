<script src={{ url('/js/moment.js')}}></script>
<script src={{ url('/js/moment-timezone-with-data.js')}}></script>

@yield('javascript')
{{-- Dependencies --}}

<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="{{ url('adminlte/js') }}/bootstrap.min.js"></script>
{{-- AdminLTE --}}
<script src="{{ url('adminlte/js/app.min.js') }}"></script>
{{-- CK Editor --}}
<script src="https://cdn.ckeditor.com/4.9.2/full/ckeditor.js"></script>

<script src="/js/lang.js"></script>

<script type="text/javascript" src={{ url('/js/jquery-jvectormap-2.0.3.min.js')}}></script>
<script type="text/javascript" src={{ url('/js/maps/jquery-jvectormap-world-mill.js')}}></script>
{{-- Vue --}}
<script src="{{ mix('/client/js/manifest.js') }}" type="text/javascript" charset="utf-8"></script>
<script src="{{ mix('/client/js/vendor.js') }}" type="text/javascript" charset="utf-8"></script>
<script src="{{ mix('/client/js/admin-app.js') }}" type="text/javascript" charset="utf-8"></script>

{{-- <script type="text/javascript" src={{ url('/js/jquery.js')}}></script> --}}