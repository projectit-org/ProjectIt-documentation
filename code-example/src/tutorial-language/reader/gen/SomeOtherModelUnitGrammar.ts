// Generated by the ProjectIt Language Generator.
// This file contains the input to the AGL parser generator
// (see https://https://github.com/dhakehurst/net.akehurst.language).
// The grammar in this file is read by ....

export const SomeOtherModelUnitGrammarStr = `
namespace EntityLanguage
grammar SomeOtherModelUnit {
                
SomeOtherModelUnit = 'SomeOtherModelUnit' identifier
	 'somePart' Entity ;

Entity = 'COMPANY'? 'entity' identifier ( 'base' __pi_reference )?
	 '{'
	 AttributeWithLimitedType*
	 EntityFunction*
	 '}' ;

AttributeWithLimitedType = identifier ':' AttributeType ;

AttributeWithEntityType = 'AttributeWithEntityType' identifier
	 'declaredType' __pi_reference ;

EntityFunction = 'EntityFunction' identifier
	 'aliases' [ stringLiteral / ',' ]*
	 'expression' EntityExpression
	 'parameters'
	 Variable*
	 'declaredType' __pi_reference ;

AbsExpression = 'AbsExpression'
	 'expr' EntityExpression
	 'appliedfeature' AppliedFeature? ;

AttributeRef = 'AttributeRef'
	 'appliedfeature' AppliedFeature?
	 'attribute' __pi_reference ;

VariableRef = 'VariableRef'
	 'appliedfeature' AppliedFeature?
	 'variable' __pi_reference ;

StringLiteralExpression = '\\'' stringLiteral '\\'' ;

NumberLiteralExpression = stringLiteral ;

BooleanLiteralExpression = 'BooleanLiteralExpression'
	 'value' stringLiteral
	 'appliedfeature' AppliedFeature? ;

FunctionCallExpression = '+'
	 'CALL' __pi_reference '(' ')' ;

IfExpression = 'if' '(' EntityExpression ')' 'then'
	 EntityExpression
	 'else'
	 EntityExpression
	 'endif' ;

Variable = 'Variable' identifier
	 'declaredType' __pi_reference ;

EntityExpression = AbsExpression 
    | VariableRef 
    | LiteralExpression 
    | FunctionCallExpression 
    | IfExpression 
    | __pi_binary_expression ;

AppliedFeature = AttributeRef  ;

LiteralExpression = StringLiteralExpression 
    | NumberLiteralExpression 
    | BooleanLiteralExpression  ;

__pi_binary_expression = [EntityExpression / __pi_binary_operator]2+ ;
leaf __pi_binary_operator = '*' | '+' | '/' | 'AndExpression' | 'or' | '<' | 'GreaterThenExpression' | 'EqualsExpression' ;

AttributeType = identifier ;   

__pi_reference = [ identifier / '::' ]+ ;
        
// white space and comments
skip WHITE_SPACE = "\\s+" ;
skip SINGLE_LINE_COMMENT = "//[^\\r\\n]*" ;
skip MULTI_LINE_COMMENT = "/\\*[^*]*\\*+(?:[^*/][^*]*\\*+)*/" ;
        
// the predefined basic types   
leaf identifier          = "[a-zA-Z_][a-zA-Z0-9_]*" ;
/* see https://stackoverflow.com/questions/37032620/regex-for-matching-a-string-literal-in-java */
leaf stringLiteral       = '"' "[^\\"\\\\]*(\\\\.[^\\"\\\\]*)*" '"' ;
leaf numberLiteral       = "[0-9]+";
leaf booleanLiteral      = 'false' | 'true';
            
}`; // end of grammar
