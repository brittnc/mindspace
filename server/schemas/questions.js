

const test = {
    welcome: 'The PHQ-9 is the nine item depression scale of the Patient Health Questionnaire. It can be a powerful tool to assist clinicians with diagnosing depression and monitoring treatment response. The nine items of the PHQ-9 are based directly on the nine diagnostic criteria for major depressive disorder in the DSM-IV (Diagnostic and Statistical Manual Fourth Edition). This can help track a patients overall depression severity as well as the specific symptoms that are improving or not with treatment.',
    mainQuestion : 'Over the last two weeks, how often have you been bothered by any of the following problems?',
    subQuestions : [
        'Little interest or in dowing things?',
        'Feeling down, depressed, or hopeless?',
        'too much?',
        'Feeling tired or having little energy?',
        'Poor appetite or overeating?',
        'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
        'Trouble concentrating on things, such as reading the newspaper or watching television?',
        'Moving or speaking so slowly that other people could have noticed? or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
        'Thoughts that you would be better off dead, or of hurting yourself in some way?'
    ],

    options : [
        'Not at all',
        'Several Days',
        'More than half the days',
        'Nearly every day'
    ],

    calculateSeverity : function(score) {
        // severity level and boolean flag for whether to recommend to professional
        var results = {
            severity: '',
            recommend : false
        };
        //scoring logic
        if (score < 5) {
            results.severity = 'None';
        } else if (score >= 5 && score <=9) {
            results.severity = 'Mild';
        } else if (score >= 10) {
            // moderate minimum met, set recommendation
            results.recommend = true;
            if (score >= 10 && score <= 14) {
                results.severity = 'Moderate';
            } else if (score >= 15 && score <=19) {
                results.severity = 'Moderately Severe';
            } else if (score >= 20) {
                results.severity = 'Severe';
            }
        }
        return results
    }
};