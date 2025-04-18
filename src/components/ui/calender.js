import { Flex, Icon, Text, Box, Portal } from '@chakra-ui/react';
import { CiCalendar } from "react-icons/ci";
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MoveLeftIcon = () => (
    <Icon
        as={FaChevronLeft}
        width="16px"
        height="16px"
        style={{
            marginTop: '32.5px',
        }}
    />
);

const MoveRightIcon = () => (
    <Icon
        as={FaChevronRight}
        width="16px"
        height="16px"
        style={{
            marginTop: '32.5px',
        }}
    />
);

const CalendarDayAbbreviation = ({ day }) => (
    <Box
        width="50px"
        height="auto"
        display="flex"
        alignItems="flex-start"
        justifyContent="center" // Centered the text
        mb="8px"
    >
        <Text
            fontFamily="Montserrat"
            fontWeight={500}
            fontSize="12px"
            lineHeight="100%"
            letterSpacing="0%"
            color="#FFFFFF"
            textAlign="center" // Ensured text is centered
        >
            {day}
        </Text>
    </Box>
);

const CalendarDayNumber = ({ day }) => (
    <Box
        width="50px"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#333333"
        fontSize="16px"
        fontFamily="Montserrat"
        fontWeight={500}
        borderRadius="8px"
        border="1px solid #D2AC71"
        backgroundColor="#F6EEE5"
        boxShadow="0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset"
    >
        {day}
    </Box>
);

const CalendarItems = () => {
    const [isCalendarBoxVisible, setCalendarBoxVisible] = useState(false);
    const calendarBarRef = useRef(null);
    const [calendarBoxPosition, setCalendarBoxPosition] = useState({ top: 0, left: 0 });
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleCalendarClick = () => {
        setCalendarBoxVisible(!isCalendarBoxVisible);
    };

    const goToPreviousMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const goToNextMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    useEffect(() => {
        if (isCalendarBoxVisible && calendarBarRef.current) {
            const rect = calendarBarRef.current.getBoundingClientRect();
            setCalendarBoxPosition({
                top: rect.bottom + window.scrollY + 16,
                left: rect.left + window.scrollX - 245,
            });
        } else {
            setCalendarBoxPosition({ top: 0, left: 0 });
        }
    }, [isCalendarBoxVisible]);

    const calendarBoxStyles = {
        position: 'absolute',
        top: `${calendarBoxPosition.top}px`,
        left: `${calendarBoxPosition.left}px`,
        width: '1060px',
        height: '557px',
        borderRadius: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
    };

    const monthHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        width: '100%',
        justifyContent: 'center',
        marginTop: '32.5px',
    };

    const currentMonthStyle = {
        fontFamily: 'Montserrat',
        fontWeight: 800,
        fontSize: '24px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#FFFFFF',
        marginLeft: '20px',
        marginRight: '20px',
    };

    const calendarColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const calendarDaysGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '5px',
        marginTop: '5px',
    };

    const daysOfWeekGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        marginBottom: '8px', // Increased margin bottom for the abbreviations
        textAlign: 'center',
        width: '100%',
    };

    const leftHalfStyle = {
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const rightHalfStyle = {
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const nextMonthStyle = {
        fontFamily: 'Montserrat',
        fontWeight: 800,
        fontSize: '24px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#FFFFFF',
        marginLeft: '20px',
        marginRight: '20px',
    };

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const renderMonthDays = (date) => {
        const daysInMonth = getDaysInMonth(date);
        const firstDayOfMonth = getFirstDayOfMonth(date);
        const daysArray = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push(<Box key={`empty-${date.getMonth()}-${i}`} width="50px" height="50px" />);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(<CalendarDayNumber key={`${date.getMonth()}-${i}`} day={i} />);
        }

        while (daysArray.length % 7 !== 0) {
            daysArray.push(<Box key={`padding-${date.getMonth()}-${daysArray.length}`} width="50px" height="50px" />);
        }

        return (
            <Flex style={calendarDaysGridStyle}>
                {daysArray}
            </Flex>
        );
    };

    const getDisplayedMonthYear = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    };

    const getNextMonthDate = () => {
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(currentDate.getMonth() + 1);
        return nextMonth;
    };

    return (
        <Box position="relative" display="inline-block">
            <Flex
                alignItems="center"
                cursor="pointer"
                onClick={handleCalendarClick}
                ref={calendarBarRef}
            >
                <Icon as={CiCalendar} boxSize={`${26}px`} color="#D2AC71" mr={2} />
                <Text
                    width="auto"
                    height={`${20}px`}
                    fontFamily="Montserrat"
                    fontWeight={600}
                    fontSize="16px"
                    lineHeight="100%"
                    letterSpacing="0%"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    {getDisplayedMonthYear(currentDate)} - {getDisplayedMonthYear(getNextMonthDate())}
                </Text>
            </Flex>

            {isCalendarBoxVisible && (
                <Portal>
                    <Box style={calendarBoxStyles}>
                        <Box style={leftHalfStyle}>
                            <Flex style={{ ...monthHeaderStyle, justifyContent: 'space-between' }} alignItems="center">
                                <Icon as={FaChevronLeft} width="16px" height="16px" marginTop="32.5px" cursor="pointer" onClick={goToPreviousMonth} />
                                <Text style={currentMonthStyle}>
                                    {getDisplayedMonthYear(currentDate)}
                                </Text>
                                <Box width="auto" />
                            </Flex>
                            <Flex style={daysOfWeekGridStyle}>
                                {daysOfWeek.map((day, index) => (
                                    <CalendarDayAbbreviation key={index} day={day} />
                                ))}
                            </Flex>
                            {renderMonthDays(currentDate)}
                        </Box>
                        <Box style={rightHalfStyle}>
                            <Flex style={{ ...monthHeaderStyle, justifyContent: 'space-between' }} alignItems="center">
                                <Box width="auto" />
                                <Text style={nextMonthStyle}>
                                    {getDisplayedMonthYear(getNextMonthDate())}
                                </Text>
                                <Icon as={FaChevronRight} width="16px" height="16px" marginTop="32.5px" cursor="pointer" onClick={goToNextMonth} />
                            </Flex>
                            <Flex style={daysOfWeekGridStyle}>
                                {daysOfWeek.map((day, index) => (
                                    <CalendarDayAbbreviation key={`next-${index}`} day={day} />
                                ))}
                            </Flex>
                            {renderMonthDays(getNextMonthDate())}
                        </Box>
                    </Box>
                </Portal>
            )}
        </Box>
    );
};

// Simple Spacer component (optional, but can be kept)
const Spacer = ({ width }) => (
    <Box width={width} />
);

export default CalendarItems;