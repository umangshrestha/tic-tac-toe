#####################################################################
*** Settings ***
#####################################################################
Library   ../../Bot.py
Library   ../../utils/PassCriteria.py
#####################################################################

#####################################################################
*** Variables ***
#####################################################################
${PASS_FILE}=      pass_criteria.yaml
#####################################################################

#####################################################################
*** Keywords ***
#####################################################################

###################################################
#   add pass criteria for SUITE
###################################################
INITIALIZE PASS CRITERIA
    ADD_PASS    ${PASS_FILE}
###################################################
