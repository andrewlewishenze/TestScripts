// Assign question Slug to variables
var num_patient = "q-34-zniknri";
var num_patient_sec = "s-5-wporduk";

var observed = ["responses.answers['" + num_patient_sec + "']['"+ num_patient +"'].value"];



$scope.$watchGroup(observed,

		function(newValue,oldValue,scope){

			var val1 = isNaN( newValue[0] ) ? 0 : newValue[0]; 
			//Calculation
			var rice_official = val1 * 12;
			var pulse_official = val1 * 1.8;
			var oil_official = val1 * 0.9;
			var salt_official = val1 * 0.15;
			var blendedfood_official = val1 * 1.5;

			rice_official = rice_official > 0 ? rice_official : NaN;
			$log.debug("CalcValue:", rice_official);

			pulse_official = pulse_official > 0 ? pulse_official : NaN;
			$log.debug("CalcValue:", pulse_official);

			oil_official = oil_official > 0 ? oil_official : NaN;
			$log.debug("CalcValue:", oil_official);

			salt_official = salt_official > 0 ? salt_official : NaN;
			$log.debug("CalcValue:", salt_official);

			blendedfood_official = blendedfood_official > 0 ? blendedfood_official : NaN;
			$log.debug("CalcValue:", blendedfood_official);

			//Define Grid Slug to display the result
			$parse("answers['" + $scope.section.slug + "']['d-1-plmocxp_q-59-kmdvbnq'].value="+ rice_official )($scope.responses);
			$parse("answers['" + $scope.section.slug + "']['d-2-ewfculm_q-59-kmdvbnq'].value="+ pulse_official )($scope.responses);
			$parse("answers['" + $scope.section.slug + "']['d-3-gabfmsf_q-59-kmdvbnq'].value="+ oil_official )($scope.responses);
			$parse("answers['" + $scope.section.slug + "']['d-4-isvcwcz_q-59-kmdvbnq'].value="+ salt_official )($scope.responses);
			$parse("answers['" + $scope.section.slug + "']['d-5-ahegiwg_q-59-kmdvbnq'].value="+ blendedfood_official )($scope.responses);
		}
);